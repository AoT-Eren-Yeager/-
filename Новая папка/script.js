const mainCheckbox = document.getElementById("select_all");
const otherCheckbox = document.querySelectorAll(".item-checkbox");

if (mainCheckbox){
        mainCheckbox.addEventListener('change', function() {
        otherCheckbox.forEach(checkbox => {
            checkbox.checked = mainCheckbox.checked;
        });
    });
}
