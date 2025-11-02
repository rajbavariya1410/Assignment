
document.addEventListener("DOMContentLoaded", function () {
    const bookingType = document.getElementById("bookingType");
    const dynamicFields = document.getElementById("dynamicFields");

    bookingType.addEventListener("change", function () {
        const selected = bookingType.value;
        dynamicFields.innerHTML = ''; 

   
        function createLabeledElement(labelText, elementType, inputType = null, options = []) {
            const wrapper = document.createElement("div");

            const label = document.createElement("label");
            label.textContent = labelText;

            let input;

            if (elementType === "input") {
                input = document.createElement("input");
                input.type = inputType;
                input.required = true;
            } else if (elementType === "select") {
                input = document.createElement("select");
                input.required = true;

                const defaultOption = document.createElement("option");
                defaultOption.textContent = "-- Select --";
                defaultOption.disabled = true;
                defaultOption.selected = true;
                input.appendChild(defaultOption);

                options.forEach(opt => {
                    const option = document.createElement("option");
                    option.textContent = opt;
                    input.appendChild(option);
                });
            }

            wrapper.appendChild(label);
            wrapper.appendChild(input);
            return wrapper;
        }

        
        if (["full", "half", "hourly"].includes(selected)) {
            dynamicFields.appendChild(
                createLabeledElement("Date:", "input", "date")
            );
        }

        if (selected === "half") {
            dynamicFields.appendChild(
                createLabeledElement("Slot:", "select", null, ["Morning", "Afternoon", "Evening"])
            );
        }

        if (selected === "hourly") {
            dynamicFields.appendChild(
                createLabeledElement("Time:", "input", "time")
            );
        }
    });
});
