const printBtn = document.getElementById('printBtn');

printBtn.addEventListener('click', () => {
    printBtn.disable = true;
    window.print();

    setTimeout(() => {
        printBtn.disable = false;
    }, 1000);
})