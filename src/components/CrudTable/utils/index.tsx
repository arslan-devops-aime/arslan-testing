export const refineLabel = (label: string | undefined): string => {
    if (label === undefined) return "";
    // Using a regular expression with global flag to replace all occurrences
    label = label.replace(/_/g, " ");
    label = label.charAt(0).toUpperCase() + label.slice(1);
    return label;
};


export function isFileObject(file: any): boolean {
    return file instanceof File;
}

export function isFileObjectArray(files: any): boolean {
    return Array.isArray(files) && files.every(file => file instanceof File);
}

export function isObject(value: any): boolean {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function isBoolean(value: any): boolean {
    return typeof value === "boolean";
}

export function isString(value: any): boolean {
    return typeof value === "string";
}

export function isValidObjectId(id: string): boolean {
    // A valid MongoDB ObjectId is a 24-character hexadecimal string.
    const objectIdPattern = /^[a-fA-F0-9]{24}$/;
    return objectIdPattern.test(id);
  }