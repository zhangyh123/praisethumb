class PariseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;
    }

    clickAction() {
        this.element.click(() => {
            if (this.num < 10) {
                // css 滤镜
                this.element.css('-webkit-filter', 'grayscale(0)');
                $('#animation').addClass('num');
                this.num = add(this.num);
                setTimeout(() => $('#animation').removeClass('num'), 1000);
            } else {
                this.element.css('-webkit-filter', 'grayscale(1)');
                this.num = 0;
            }
            console.log(this.num);
        })
    }

}


class Thumb extends PariseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export default Thumb;