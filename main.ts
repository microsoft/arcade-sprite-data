namespace sprites {
    /**
     * Sets a number in the data of a sprite
     */
    //% blockId=spriteDataSetNumber block="set $sprite=variables_get data $name to number $value"
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function setDataNumber(sprite: Sprite, name: string, value: number) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Change a number in the data of a sprite by a given value
     */
    //% blockId=spriteDataChangeNumber block="change $sprite=variables_get data $name by number $value"
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function changeDataNumberBy(sprite: Sprite, name: string, value: number) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = (d[name] || 0) + value;
    }

    /**
     * Gets a number in the data of a sprite
     */
    //% blockId=spriteDataGetNumber block="$sprite=variables_get data $name as number"
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function readDataNumber(sprite: Sprite, name: string): number {
        if (!sprite || !name) return 0;
        const d = sprite.data;
        return d[name] as number;
    }

    /**
     * Sets a string in the data of a sprite
     */
    //% blockId=spriteDataSetString block="set $sprite=variables_get data $name to string $value"
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function setDataString(sprite: Sprite, name: string, value: string) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a number in the data of a sprite
     */
    //% blockId=spriteDataGetString block="$sprite=variables_get data $name as string"
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function readDataString(sprite: Sprite, name: string): string {
        if (!sprite || !name) return "";
        const d = sprite.data;
        return d[name] as string;
    }

    /**
     * Sets a boolean in the data of a sprite
     */
    //% blockId=spriteDataSetBoolean block="set $sprite=variables_get data $name to boolean $value"
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function setDataBoolean(sprite: Sprite, name: string, value: boolean) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = !!value;
    }

    /**
     * Gets a boolean in the data of a sprite
     */
    //% blockId=spriteDataGetBoolean block="$sprite=variables_get data $name as boolean"
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function readDataBoolean(sprite: Sprite, name: string): boolean {
        if (!sprite || !name) return false;
        const d = sprite.data;
        return !!d[name];
    }

    /**
     * Sets a sprite in the data of a sprite
     */
    //% blockId=spriteDataSetSprite block="set $sprite=variables_get data $name to sprite $value"
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function setDataSprite(sprite: Sprite, name: string, value: Sprite) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a sprite in the data of a sprite
     */
    //% blockId=spriteDataGetSprite block="$sprite=variables_get data $name as sprite"
    //% group="Data"
    //% weight=10
    //% blockGap=8
    export function readDataSprite(sprite: Sprite, name: string): Sprite {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as Sprite;
    }


    /**
     * Sets a sprite in the data of a sprite
     */
    //% blockId=spriteDataSetImage block="set $sprite=variables_get data $name to image $value"
    //% group="Data"
    //% weight=9
    //% blockGap=8
    export function setDataImage(sprite: Sprite, name: string, value: Image) {
        if (!sprite || !name) return;
        const d = sprite.data;
        d[name] = value;
    }

    /**
     * Gets a sprite in the data of a sprite
     */
    //% blockId=spriteDataGetImage block="$sprite=variables_get data $name as image"
    //% group="Data"
    //% weight=9
    //% blockGap=8
    export function readDataImage(sprite: Sprite, name: string): Image {
        if (!sprite || !name) return undefined;
        const d = sprite.data;
        return d[name] as Image;
    }
}