import config from "../config/config";

class Config
{
    static getBackendUrl()
    {
        return config.backendUrl + "/";
    }
}

export default Config;