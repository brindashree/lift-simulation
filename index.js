const addFloorBtn = document.querySelector(".add-floor-btn");
const floorContainerElement = document.querySelector(".floor-container");

const handleAddFloor = () => {
	const newFloor = document.createElement("div");
	newFloor.classList.add("floor");
	newFloor.innerHTML = `
                <div class="btn-container">
					<button class="btn btn-up">Up</button>
					<button class="btn btn-down">Down</button>
				</div>
    `;
	floorContainerElement.prepend(newFloor);
};

addFloorBtn.addEventListener("click", handleAddFloor);
