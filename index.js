const addFloorBtn = document.querySelector(".add-floor-btn");
const addLiftBtn = document.querySelector(".add-lift-btn");
const floorContainerElement = document.querySelector(".floor-container");
const firstFloor = document.querySelector("[data-floor-num='1']");
const lifts = document.querySelectorAll(".lift");
const floors = document.querySelectorAll(".floor");

const upBtn = document.querySelector(".btn-up");
const downBtn = document.querySelector(".btn-down");

const liftsArray = Array(lifts);
const floorsArray = Array(floors);

const handleAddFloor = () => {
	if (floorsArray.length < 4) {
		const newFloor = document.createElement("div");
		newFloor.classList.add("floor");
		newFloor.innerHTML = `
                <div class="btn-container">
					<button class="btn btn-up" data-up-btn=${floorsArray.length + 1}>Up</button>
					<button class="btn btn-down" data-down-btn=${
						floorsArray.length + 1
					}>Down</button>
				</div>
    `;
		floorContainerElement.prepend(newFloor);
		floorsArray.push(newFloor);
		newFloor.setAttribute("data-floor-num", floorsArray.length);
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
const handleLiftUp = (distance) => {
	const transitionDistance =
		parseInt(distance) == 1 ? 0 : (parseInt(distance) - 1) * 10;
	lifts[0].style.bottom = `${transitionDistance}rem`;
	lifts[0].style.transition = `2s linear`;
};
addEventListener("click", (e) => {
	if (e.target.dataset.upBtn) {
		handleLiftUp(e.target.dataset.upBtn);
	} else if (e.target.dataset.downBtn) {
		handleLiftUp(e.target.dataset.downBtn);
	}
});

addFloorBtn.addEventListener("click", handleAddFloor);
addLiftBtn.addEventListener("click", handleAddLift);
upBtn.addEventListener("click", handleLiftUp);
