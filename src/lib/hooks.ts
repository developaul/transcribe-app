import { useCallback, useState } from "react";

export const useForceUpdate = () => {
  const [, updateState] = useState<any>();

  const forceUpdate = useCallback(() => updateState({}), []);

  return forceUpdate
}
