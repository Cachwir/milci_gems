export function localStorageGet(key, defaultValue = undefined)
{
    let retrievedValue = localStorage.getItem(key);
    return retrievedValue === null ? defaultValue : JSON.parse(retrievedValue);
}

export function localStorageSet(key, value)
{
    localStorage.setItem(key, JSON.stringify(value))
}