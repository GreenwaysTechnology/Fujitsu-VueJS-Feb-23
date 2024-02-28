import { ref } from "vue"
import { useEventListener } from "./useEvent"

export function useMouseTrack() {
    const x = ref(0)
    const y = ref(0)
    const update = evt => {
        x.value = evt.pageX
        y.value = evt.pageY
    }
    useEventListener(window, 'mousemove', update)
    return {
        x, y
    }

}