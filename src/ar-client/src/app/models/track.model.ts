export enum TrackType {
    "H",// Human
    "V",// Surface Vehicle (eg. car, scooter),
    "M",// marine watercraft (eg. ship),
    "U",// underwater (eg. submarine, diver),
    "A",// airplane,
    "D",// drone/UAV,
    "C",// heliCopter,
    "X"// Unknown
}

export class Track {
    b: number; //bearing from tablet position to track, relative to north
    d: number; //distance in meters
    s: number; //(square) size of the target (approximate)
    v: number; //track speed in m/s
    a: number; //track altitude (m)
    t: TrackType; //type of track (see below for examples)
    x: number; //X position compared to image center, -0.5 represents left border, 0.5 is right border
    y: number; //Y position to compared to image center,        -0.5 represents bottom border, 0.5 is top border
    r: number; //risk level [optional]: 1 to 5 (where 1 is minimal and 5 is maximum)
    D: any//track Details [optional].        Could be coming as part of a "positional" update or as a separate one

    constructor(
        b: number,
        d: number,
        s: number,
        v: number,
        a: number,
        t: TrackType,
        x: number,
        y: number,
        r: number,
        D: any
    ) { }
}