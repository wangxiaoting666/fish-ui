import Demo from "../Demo.vue";
import { Buttons, Dialog } from "../../lib";
export default {
    name: "DialogDemo1",
    components: { Demo, Buttons, Dialog },
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
        };
        const f1 = () => {
            return false;
        };
        const f2 = () => {
        };
        return {
            x,
            toggle,
            f1,
            f2
        };
    }
};