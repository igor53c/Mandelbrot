export class ComplexNumber {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    add(other) {
        return new ComplexNumber(this.real + other.real, this.imag + other.imag);
    }

    sub(other) {
        return new ComplexNumber(this.real - other.real, this.imag - other.imag);
    }

    mul(other) {
        const real = this.real * other.real - this.imag * other.imag;
        const imag = this.real * other.imag + this.imag * other.real;
        return new ComplexNumber(real, imag);
    }

    div(other) {
        const denominator = other.real * other.real + other.imag * other.imag;
        const real = (this.real * other.real + this.imag * other.imag) / denominator;
        const imag = (this.imag * other.real - this.real * other.imag) / denominator;
        return new ComplexNumber(real, imag);
    }

    square() {
        const real = this.real * this.real - this.imag * this.imag;
        const imag = 2 * this.real * this.imag;
        return new ComplexNumber(real, imag);
    }

    magnitudeSquared() {
        return this.real * this.real + this.imag * this.imag;
    }

    toString() {
        const realPart = this.real;
        const imagPart = this.imag;
        return `<div>${realPart} ${this.imag < 0 ? '-' : '+'} ${Math.abs(imagPart)} <em>i</em></div>`;
    }
}

export function mandelbrot(c, maxIterations) {
    let z = new ComplexNumber(0, 0);
    for (let i = 0; i < maxIterations; i++) {
        z = z.square().add(c);
        if (z.magnitudeSquared() > 4) {
            return i + 1;
        }
    }
    return maxIterations;
}

export function getColor(iterations, maxIterations) {
    if (iterations === maxIterations) {
        return [0, 0, 0];
    }
    return [255, 255, 255];
}
