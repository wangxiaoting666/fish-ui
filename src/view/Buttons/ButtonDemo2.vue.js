支持;
size
    < /demo>
    < template >
    size;
"big" > 大大大 < /Button>
    < Button > 普普通 < /Button>
    < Button;
size = "small" > 小小小 < /Button>
    < /div>
    < div >
    theme;
"link";
size = "big" > 大大大 < /Button>
    < Button;
theme = "link" > 普普通 < /Button>
    < Button;
size = "small";
theme = "link" > 小小小 < /Button>
    < /div>
    < div >
    size;
"big";
theme = "text" > 大大大 < /Button>
    < Button;
theme = "text" > 普普通 < /Button>
    < Button;
size = "small";
theme = "text" > 小小小 < /Button>
    < /div>
    < /div>
    < /template>
    < script;
lang = "ts" >
;
import { Button } from '../../lib/index';
export default {
    components: {
        Button
    }
}
    < /script>;
