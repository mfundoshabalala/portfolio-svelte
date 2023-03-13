// get object keys

export const getObjectKeys = (obj: any) => {
	return Object.keys(obj);
};

export const fixHeading = (heading: string) => {
	return heading.replaceAll('-', ' ');
};
