import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        const { api, navigate } = extra;

        try {
            const { data } = await api.post<User>('/login', authData);

            if (!data) {
                throw new Error('No response received');
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));
            navigate(AppRoutes.PROFILE);

            return data;
        } catch (error) {
            console.log(error);

            return rejectWithValue(i18n.t('Incorrect username or password'));
        }
    },
);
