function htmlHeightAndWeight(height, weight, baseHappiness, captureRate, habitat, growthRate, shape) {
    return /*html*/`
    <div class="content-div" style="margin-top: 24px;">
        <div class="about-box">
            <p>
                Height
            </p> 
            <span>
                ${height} ft
            </span>
        </div>            
        <div class="about-box">
            <p>
                Weight
            </p>
            <span>
                ${weight} lbs
            </span>
        </div>
    </div>
    <div class="content-div">
        <div class="about-box">
            <p>
            Base Happiness
            </p> 
            ${baseHappiness} points
        </div>
        <div class="about-box">
            <p>
                Capture Rate
            </p> 
            ${captureRate} points
        </div>
    </div>
    <div class="content-div">
        <div class="about-box">
            <p>
                Habitat
            </p>
            <span>
                ${habitat}
            </span>
        </div>
        <div class="about-box">
            <p>
                Growth Rate
            </p>
            <span>
                ${growthRate}
            </span>
        </div>
    </div>
    <div class="content-div">
        <div class="about-box">
            <p>
                Shape
            </p>
            <span>
                ${shape}
            </span>
        </div>
        <div id="egg-id" class="about-box">
            <p>
                Egg Groupes
            </p>
        </div>
    </div>
    `;
}