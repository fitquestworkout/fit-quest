// Notification System for Fit Quest

// Check if the browser supports notifications
function areNotificationsSupported() {
    return 'Notification' in window;
}

// Request notification permission
function requestNotificationPermission() {
    return new Promise((resolve, reject) => {
        if (!areNotificationsSupported()) {
            reject('Notifications not supported');
            return;
        }
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                resolve('Notification permission granted');
            } else {
                reject('Notification permission denied');
            }
        });
    });
}

// Schedule a notification
function scheduleNotification() {
    const lastWorkout = localStorage.getItem('lastWorkout');
    const now = new Date();
    
    if (!lastWorkout || (now - new Date(lastWorkout)) > 24 * 60 * 60 * 1000) {
        // If no workout in the last 24 hours, schedule a notification
        const notification = new Notification('Time to quest!', {
            body: 'Your character is waiting for a new adventure. Time for a workout!',
            icon: '/path/to/your/icon.png' // Replace with your app's icon
        });

        notification.onclick = function() {
            window.focus();
            this.close();
        };
    }
}

// Check if it's time for a workout when the app is opened
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        scheduleNotification();
    }
});

// Function to call when a workout is completed
function completeWorkout() {
    localStorage.setItem('lastWorkout', new Date().toISOString());
    // Other workout completion logic...
}

// Initialize notification system
function initNotificationSystem() {
    if (areNotificationsSupported()) {
        requestNotificationPermission()
            .then(() => console.log('Notification system initialized'))
            .catch(error => console.error('Error initializing notification system:', error));
    } else {
        console.warn('Notifications are not supported in this browser');
    }
}

// Export functions
export {
    initNotificationSystem,
    completeWorkout
};
