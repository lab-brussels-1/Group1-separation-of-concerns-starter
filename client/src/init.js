window.addEventListener('load', () => {
	const form = document.getElementById('new-shopping-form');
	const input = document.getElementById('new-shopping-input');
	const listEl = document.getElementById('shopping');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const shopping = input.value;

		const buyEl = document.createElement('div');
		buyEl.classList.add('shopping');

		const buyContentEl = document.createElement('div');
		buyContentEl.classList.add('content');

		buyEl.appendChild(buyContentEl);

		const buyInputEl = document.createElement('input');

		buyInputEl.classList.add('text');

		buyInputEl.type = 'text';

		buyInputEl.value = shopping;

		buyInputEl.setAttribute('readonly', 'readonly');

		buyContentEl.appendChild(buyInputEl);

		const taskActionEl = document.createElement('div');
		taskActionEl.classList.add('actions');

		const taskEditEl = document.createElement('button');
		taskEditEl.classList.add('edit');
		taskEditEl.innerHTML = 'Edit';

		const taskDeleteEl = document.createElement('button');
		taskDeleteEl.classList.add('delete');
		taskDeleteEl.innerHTML = 'Delete';

		taskActionEl.appendChild(taskEditEl);
		taskActionEl.appendChild(taskDeleteEl);

		buyEl.appendChild(taskActionEl);

		listEl.appendChild(buyEl);

		input.value = '';

		taskEditEl.addEventListener('click', () => {
			if (taskEditEl.innerText.toLowerCase() === 'edit') {
				buyInputEl.removeAttribute('readonly');
				buyInputEl.focus();
				taskEditEl.innerText = 'Save';
			} else {
				buyInputEl.setAttribute('readonly', 'readonly');
				taskEditEl.innerText = 'Edit';

				taskDeleteEl.addEventListener('click', () => {
					listEl.removeChild(buyEl);
				});
			}
		});
	});
});
