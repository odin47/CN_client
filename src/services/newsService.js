import getService from "./request";

const getNewsList = async (keyword) => {
	const url = `/news?keyword=${keyword}`;
	const data = await getService(url);
	return data
}

export {getNewsList}