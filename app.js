document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('login-screen');
    const setupScreen = document.getElementById('setup-screen');
    const mainContent = document.getElementById('main-content');
    const profileManagement = document.getElementById('profile-management');
    
    const nameInput = document.getElementById('name');
    const characterTypeSelect = document.getElementById('character-type');
    const exercisePreferences = document.querySelectorAll('input[name="exercise-preferences"]');

    const setupForm = document.getElementById('setup-form');
    const profileForm = document.getElementById('profile-form');
    const logoutButton = document.getElementById('logout');
    const loginForm = document.getElementById('login-form');
    const goToRegisterButton = document.getElementById('go-to-register');

    goToRegisterButton.addEventListener('click', () => {
        loginScreen.style.display = 'none';
        setupScreen.style.display = 'flex';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const loginName = document.getElementById('login-name').value;
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user && user.name === loginName) {
            loginScreen.style.display = 'none';
            mainContent.style.display = 'flex';
            loadUserData();
        } else {
            alert('User not found. Please register.');
        }
    });

    setupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = nameInput.value;
        const characterType = characterTypeSelect.value;
        const preferences = Array.from(exercisePreferences).filter(input => input.checked).map(input => input.value);
        
        const user = {
            name,
            characterType,
            exercisePreferences: preferences
        };

        localStorage.setItem('user', JSON.stringify(user));
        
        setupScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        loadUserData();
    });

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('edit-name').value;
        const characterType = document.getElementById('edit-character-type').value;
        const preferences = Array.from(document.querySelectorAll('input[name="edit-exercise-preferences"]')).filter(input => input.checked).map(input => input.value);
        
        const user = {
            name,
            characterType,
            exercisePreferences: preferences
        };

        localStorage.setItem('user', JSON.stringify(user));
        loadUserData();
        mainContent.style.display = 'flex';
        profileManagement.style.display = 'none';
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        loginScreen.style.display = 'flex';
        mainContent.style.display = 'none';
        profileManagement.style.display = 'none';
    });

    if (localStorage.getItem('user')) {
        loginScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        loadUserData();
    } else {
        loginScreen.style.display = 'flex';
        setupScreen.style.display = 'none';
        mainContent.style.display = 'none';
    }
    
    function loadUserData() {
        const user = JSON.parse(localStorage.getItem('user'));
        document.getElementById('daily-streak').textContent = `Daily Streak: 0`;
        document.getElementById('character-view').textContent = `Character: ${user.characterType}`;
        document.getElementById('edit-name').value = user.name;
        document.getElementById('edit-character-type').value = user.characterType;
        document.querySelectorAll('input[name="edit-exercise-preferences"]').forEach(input => {
            input.checked = user.exercisePreferences.includes(input.value);
        });
    }
});
