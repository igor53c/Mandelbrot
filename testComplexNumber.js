import { ComplexNumber, mandelbrot, getColor } from './ComplexNumber.js';

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function testComplexNumber() {
    // Test Addition
    let z1 = new ComplexNumber(1, 2);
    let z2 = new ComplexNumber(3, 4);
    let result = z1.add(z2);
    assert(result.real === 4, `Expected 4, but got ${result.real}`);
    assert(result.imag === 6, `Expected 6, but got ${result.imag}`);

    // Test Subtraction
    z1 = new ComplexNumber(5, 7);
    z2 = new ComplexNumber(2, 3);
    result = z1.sub(z2);
    assert(result.real === 3, `Expected 3, but got ${result.real}`);
    assert(result.imag === 4, `Expected 4, but got ${result.imag}`);

    // Test Multiplication
    z1 = new ComplexNumber(1, 2);
    z2 = new ComplexNumber(3, 4);
    result = z1.mul(z2);
    assert(result.real === -5, `Expected -5, but got ${result.real}`);
    assert(result.imag === 10, `Expected 10, but got ${result.imag}`);

    // Test Division
    z1 = new ComplexNumber(1, 2);
    z2 = new ComplexNumber(3, 4);
    result = z1.div(z2);
    assert(Math.abs(result.real - 0.44) < 0.01, `Expected ~0.44, but got ${result.real}`);
    assert(Math.abs(result.imag - 0.08) < 0.01, `Expected ~0.08, but got ${result.imag}`);

    // Test Square
    z1 = new ComplexNumber(1, 2);
    result = z1.square();
    assert(result.real === -3, `Expected -3, but got ${result.real}`);
    assert(result.imag === 4, `Expected 4, but got ${result.imag}`);

    // Test Magnitude Squared
    z1 = new ComplexNumber(3, 4);
    const magnitudeSquared = z1.magnitudeSquared();
    assert(magnitudeSquared === 25, `Expected 25, but got ${magnitudeSquared}`);

    console.log("All ComplexNumber tests passed.");
}

function testMandelbrot() {
    let c = new ComplexNumber(0, 0);
    let maxIterations = 100;
    let result = mandelbrot(c, maxIterations);
    assert(result === maxIterations, `Expected ${maxIterations}, but got ${result}`);

    c = new ComplexNumber(1, 1);
    result = mandelbrot(c, maxIterations);
    assert(result === 2, `Expected 2, but got ${result}`);

    console.log("All Mandelbrot tests passed.");
}

function testGetColor() {
    // Test getColor
    let iterations = 100;
    let maxIterations = 100;
    let result = getColor(iterations, maxIterations);
    assert(result[0] === 0 && result[1] === 0 && result[2] === 0, `Expected [0, 0, 0], but got [${result}]`);

    iterations = 50;
    result = getColor(iterations, maxIterations);
    assert(result[0] === 255 && result[1] === 255 && result[2] === 255, `Expected [255, 255, 255], but got [${result}]`);

    console.log("All getColor tests passed.");
}

function runTests() {
    testComplexNumber();
    testMandelbrot();
    testGetColor();
}

runTests();
