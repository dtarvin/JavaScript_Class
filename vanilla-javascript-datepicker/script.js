const datepicker = document.getElementById('datepicker');
const calendar = document.getElementById('calendar');

// Function to render the calendar
const renderCalendar = (year, month) => {
    calendar.innerHTML = '';

    const firstDay = new Date(year, month).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Create calendar header
    const header = document.createElement('div');
    header.innerHTML = `
        <h2>${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}</h2>
    `;
    calendar.appendChild(header);

    // Create calendar grid
    const grid = document.createElement('div');
    grid.classList.add('calendar-grid');

    // Add days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        grid.appendChild(dayCell);
    });

    // Add blank cells before the first day
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        grid.appendChild(emptyCell);
    }

    // Add date cells
    for (let i = 1; i <= lastDate; i++) {
        const dateCell = document.createElement('div');
        dateCell.textContent = i;
        dateCell.addEventListener('click', () => {
            datepicker.value = `${year}-${month + 1}-${i}`;
            calendar.style.display = 'none';
        });
        grid.appendChild(dateCell);
    }

    calendar.appendChild(grid);
}

// Show calendar on input focus
datepicker.addEventListener('focus', () => {
    const today = new Date();
    renderCalendar(today.getFullYear(), today.getMonth());
    calendar.style.display = 'block';
});