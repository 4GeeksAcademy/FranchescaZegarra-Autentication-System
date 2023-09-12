const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
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
						body: JSON.stringify(form)
					})
					const data = await response.json()
					localStorage.setItem("userToken", data.access_token)
					console.log("login success")
				}
				catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			requestToken: async (form) => {
				let userToken = localStorage.getItem("userToken");
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/private", {
						method: "GET",
						headers: {
							"Authorization": userToken,
							"Content-Type": "application/json",
						},
						body: form
					})
					const data = await response.json()
					console.log(data)
				}
				catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
		}
	};
};

export default getState;
