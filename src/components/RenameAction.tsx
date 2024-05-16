'use client'
import React, { FC } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'

import { renameProject } from '@/server/routes/project'

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { projectSchema } from '@/lib/schemas'
import { preventDefault } from '@/lib/prevent'

import { IProject } from '@/interfaces/project'


interface Props {
  project: IProject
  onClose: () => void
}

const RenameAction: FC<Props> = ({ project, onClose }) => {
  const { name, _id } = project

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: { name }
  })

  const { isSubmitting, isDirty } = form.formState

  const onSubmit = async ({ name }: z.infer<typeof projectSchema>) => {
    await renameProject({ projectId: _id, name })
    onClose()
  }

  return (
    <DialogContent
      onInteractOutside={(event) => preventDefault({ event, isSubmitting })}
      onEscapeKeyDown={(event) => preventDefault({ event, isSubmitting })}
      disabled={isSubmitting}
    >
      <DialogHeader>
        <DialogTitle>Rename project</DialogTitle>
        <DialogDescription>
          Make changes to your project here. Click save when you are done.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            disabled={isSubmitting}
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder={"Untitled"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <Button
              type='submit'
              loading={isSubmitting}
              disabled={Boolean(form.formState.errors.name) || !isDirty || isSubmitting}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </Form>
      <DialogClose disabled={true} />
    </DialogContent>
  )
}

export default RenameAction