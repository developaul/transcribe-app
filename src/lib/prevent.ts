interface PreventDefaultArgs {
  event: KeyboardEvent | CustomEvent
  isSubmitting: boolean
}

export const preventDefault = ({ event, isSubmitting }: PreventDefaultArgs) => {
  if (!isSubmitting) return

  event.preventDefault();
}