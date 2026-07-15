
const USERS_KEY = 'sipuncak_users';
const CURRENT_USER_KEY = 'sipuncak_current_user';

if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify([]));
}

function registerUser(name, email, password) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY));
    
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'Email sudah terdaftar.' };
    }
    
    users.push({ name, email, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true, message: 'Pendaftaran berhasil. Silakan login.' };
}

function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY));
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name, email: user.email }));
        return { success: true };
    } else {
        return { success: false, message: 'Email atau password salah.' };
    }
}

function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'login.html';
}

function isUserLoggedIn() {
    return localStorage.getItem(CURRENT_USER_KEY) !== null;
}

function getCurrentUser() {
    const userStr = localStorage.getItem(CURRENT_USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
}

function requireAuth() {
    if (!isUserLoggedIn()) {
        window.location.href = 'login.html';
    }
}
