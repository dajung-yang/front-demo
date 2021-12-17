// import axios from "axios";
// import AxiosMockAdapter from "axios-mock-adapter";
import { authApi } from "@/api/auth-api";

// export const axiosInstance = axios.create();

// const mock = new AxiosMockAdapter(axiosInstance, { delayResponse: 500 });

const res = {
    data: {
        accessToken: `encodedHeader.encodedPayload.signature`
    }
};

const email = "test@test.com";
const password = "1234";

// mock.onGet("/user", { params: { email: "", password: "" } });

test("Login Test", () => {
    expect(authApi.login({ email, password })).toBe(4);
});
