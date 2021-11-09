import {getNewsList} from "services";

const getNews = async (keyword = 'covid-19') => {
	const {data} = await getNewsList(keyword);
	return data
}

export {getNews}