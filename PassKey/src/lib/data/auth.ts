let loggedIn = false;

export function isLoggedIn(value: boolean | null) {
	if (value) {
		loggedIn = true;
	}

	if (!value) {
		return loggedIn;
	}

	return loggedIn;
}
