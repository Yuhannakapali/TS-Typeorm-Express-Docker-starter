import { get } from "lodash";
import { config } from "../../../config/default"

/**
 * @param  {string} key
 */
export function getConfig(key: string) {
    return get(config, key)
}


