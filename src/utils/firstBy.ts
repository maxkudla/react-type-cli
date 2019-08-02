const firstBy = (array: any[], comparator: (i: any) => boolean,  defaultValue?: any) => array.find(comparator) || defaultValue;

export default firstBy;
