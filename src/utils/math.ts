export function lerp(a: number, b: number, factor: number)
{
    return a * (1 - factor) + b * factor;
}