'use client'

import { FC, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { renameProject } from '@/server/routes/project';
import { projectSchema } from '@/lib/schemas';

interface Props {
  projectId: string
  name: string
}

const NameInput: FC<Props> = ({ projectId, name }) => {

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: { name },
    mode: 'onChange'
  })

  const handleChange = useDebouncedCallback(async ({ name }) => {
    try {
      if (form.formState.errors.name) return
      await renameProject({ projectId, name })
    } catch (error) {
      console.log({ error })
    }
  }, 600)

  useEffect(() => {
    const subscription = form.watch(handleChange)

    return () => subscription.unsubscribe()
  }, [form, handleChange])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => { })} className="space-y-8 mb-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name Project</FormLabel>
              <FormControl>
                <Input placeholder={"Untitled"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default NameInput