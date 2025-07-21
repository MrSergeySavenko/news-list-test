import newsReducer from '@/entities/model/news.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({ news: newsReducer });
