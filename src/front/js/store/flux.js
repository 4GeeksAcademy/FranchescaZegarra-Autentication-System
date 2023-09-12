const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null
		},

		actions: {
			// Use getActions to call a function within a fuction
			singup: async (form) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/singup", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(form),
					})
					if (response.status != 200) alert("Ups, there was an error, please try another email")
					const data = await response.json()
					alert("Success singup")
					return true;
				}
				catch (error) {
					alert("Error loading message from backend")
				}
			},
			login: async (form) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(form)
					})
					if (response.status === 401) alert("Bad user or password");
					else if (response.status !== 200) {
						return false;
					}
					const data = await response.json();
					localStorage.setItem("userToken", data.access_token);
					setStore({ token: data.access_token });
					alert("Success login");
					return true;
				}
				catch (error) {
					alert("Error loading message from backend");
				}
			},
			tokenFomLocalStorage: () => {
				const token = localStorage.getItem("userToken");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},
			logout: () => {
				localStorage.removeItem("userToken");
				setStore({ token: null });
			},
		}
	};
};

export default getState;
