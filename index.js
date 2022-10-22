const addFloorBtn = document.querySelector(".add-floor-btn");
const addLiftBtn = document.querySelector(".add-lift-btn");
const floorContainerElement = document.querySelector(".floor-container");
const firstFloor = document.querySelector("[data-floor-num='1']");
const lifts = document.querySelectorAll(".lift");
const floors = document.querySelectorAll(".floor");

const liftsArray = Array(lifts);
const floorsArray = Array(floors);

const handleAddFloor = () => {
	if (floorsArray.length < 4) {
		const newFloor = document.createElement("div");
		newFloor.classList.add("floor");
		newFloor.innerHTML = `
                <div class="btn-container">
					<button class="btn btn-up">Up</button>
					<button class="btn btn-down">Down</button>
				</div>
    `;
		floorContainerElement.prepend(newFloor);
		floorsArray.push(newFloor);
	} else {
		addFloorBtn.disabled = true;
	}
};
const handleAddLift = () => {
	if (liftsArray.length < 6) {
		const newLift = document.createElement("div");
		newLift.classList.add("lift");
		const liftMarginLeftDistance = 12 * (liftsArray.length + 1);
		liftsArray.push(newLift);
		newLift.style.position = "absolute";
		newLift.style.left = `${liftMarginLeftDistance}rem`;
		firstFloor.appendChild(newLift);
	} else {
		addLiftBtn.disabled = true;
	}
};
addFloorBtn.addEventListener("click", handleAddFloor);
addLiftBtn.addEventListener("click", handleAddLift);
