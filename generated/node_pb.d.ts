// package: node
// file: node.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Node extends jspb.Message { 
    getId(): number;
    setId(value: number): Node;

    getName(): string;
    setName(value: string): Node;

    getLocation(): string;
    setLocation(value: string): Node;

    getIpAddr(): string;
    setIpAddr(value: string): Node;

    getCountryId(): string;
    setCountryId(value: string): Node;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
    export type AsObject = {
        id: number,
        name: string,
        location: string,
        ipAddr: string,
        countryId: string,
    }
}
