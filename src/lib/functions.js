export function localStorageGet(key, defaultValue = undefined)
{
    let retrievedValue = localStorage.getItem(key);
    return retrievedValue === null ? defaultValue : JSON.parse(retrievedValue);
}

export function localStorageSet(key, value)
{
    localStorage.setItem(key, JSON.stringify(value))
}

export function escapeString(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&acute;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

export function escape(myVariable)
{
    if (Array.isArray(myVariable))
    {
        const escapedArray = [];

        myVariable.forEach(function(value)
        {
            escapedArray.push(escape(value));
        });

        return escapedArray;
    }
    else if (isObject(myVariable))
    {
        const escapedObject = {};

        for (const [key, value] of Object.entries(myVariable)) {
            escapedObject[key] = escape(value);
        }

        return escapedObject;
    }
    else if (typeof myVariable === "string")
    {
        return escapeString(myVariable);
    }
    else {
        return myVariable;
    }
}

export function isObject(myVariable) {
    return typeof myVariable === 'object'
        && myVariable !== null
        && {}.toString.call(myVariable) !== '[object Function]'
}