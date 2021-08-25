import { get } from "lodash";
import { config } from "../../env/default"


export function getConfig(key: any) {
    return get(config, key)
}


