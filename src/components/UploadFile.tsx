'use client'

import { FC } from "react";
import { Captions, FileCheck2Icon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";

import { transcribeFile } from "@/server/routes/project";

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Dropzone from "@/components/ui/Dropzone";

import { uploadFile } from "@/lib/upload";
import { allowedTypes } from "@/lib/file";

interface Props {
  projectId: string
}

interface FileForm {
  file: null | File
}

const UploadFile: FC<Props> = ({ projectId }) => {
  const { toast } = useToast()

  const methods = useForm<FileForm>({
    defaultValues: { file: null },
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
  });

  const handleOnDrop = (acceptedFiles: FileList | null) => {
    if (!acceptedFiles || !acceptedFiles.length) {
      methods.setValue("file", null)
      methods.setError("file", {
        message: "File is required",
        type: "typeError",
      })
      return
    }

    const acceptedFile = acceptedFiles[0]

    const fileType = allowedTypes.find((allowedType) =>
      allowedType.types.find((type) => type === acceptedFile.type)
    );

    if (!fileType) {
      methods.setValue("file", null);
      methods.setError("file", {
        message: "File type is not valid",
        type: "typeError",
      });
      return
    }

    if (acceptedFiles[0].size > 15000000) {
      methods.setValue("file", null);
      methods.setError("file", {
        message: "File size needs to be less than 15MB",
        type: "typeError",
      });
      return
    }

    methods.setValue("file", acceptedFile);
    methods.clearErrors("file");
  }

  const handleUploadAndTranscribe = async ({ file }: FileForm) => {
    try {
      if (!file) return

      const fileUrl = await uploadFile({ file })

      await transcribeFile({
        projectId,
        file: {
          url: fileUrl,
          extension: file?.type ?? ''
        }
      })
    } catch (error: any) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: error?.message ?? "There was a problem with your request.",
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center justify-center w-100 gap-4"
        onSubmit={methods.handleSubmit(handleUploadAndTranscribe)}
        noValidate
        autoComplete="off"
      >
        <FormField
          disabled={methods.formState.isSubmitting}
          control={methods.control}
          name="file"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Dropzone
                  {...field}
                  disabled={methods.formState.isSubmitting}
                  accept=".mp3,audio/*"
                  dropMessage="Drop files or click here"
                  handleOnDrop={handleOnDrop}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {methods.watch("file") && (
          <div className="flex items-center justify-center gap-3 p-4 relative">
            <FileCheck2Icon className="h-4 w-4" />
            <p className="text-sm font-medium">{methods.watch("file")?.name}</p>
          </div>
        )}
        <Button
          disabled={!methods.formState.isDirty || methods.formState.isSubmitting}
          loading={methods.formState.isSubmitting}
          type="submit">
          <Captions className="h-4 w-4 mr-2" />
          Transcribe
        </Button>
      </form>
    </FormProvider>
  )
}

export default UploadFile