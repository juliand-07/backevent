import * as bcrypt from 'bcrypt'
import { log } from 'console';

// crear el hash de la contraseña "el hash es la contraseña encriptada"
export const createHashValue = async (value : string) : Promise<string>=>{
    const salt = await bcrypt.genSalt()
    return bcrypt.hashSync(value,salt);
}

// comparar contraseña de la db con la que se envia del front
export const HashValue = async (pasword: string , hashedpsw: string): Promise<boolean>=>{
    return await bcrypt.compare(pasword,hashedpsw);
}