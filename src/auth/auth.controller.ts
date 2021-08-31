import { getRepository } from 'typeorm';

import { User } from '../user/user.entity';
import { CustomError } from '../utils/response/custom-error/CustomError';


export const register = async (req: any, res: any, next: any) => {
    const { firstName, middleName = "", lastName, email, password, phone, taxCode = "" } = req.body;

    const userRepository = getRepository(User);
    try {
        let user = await userRepository.findOne({ where: { email } });
        if (user) {

            const customError = new CustomError(400, 'General', 'User already exists', [
                `Email '${user.email}' already exists`,
            ]);
            return next(customError);
        }

        user = await userRepository.findOne({ where: { phone } });
        if (user) {
            const customError = new CustomError(400, 'General', 'User already exists', [
                `Phone '${user.phone}' already exists`,
            ]);
            return next(customError);
        }

        try {
            const newUser = new User();
            newUser.email = email;
            newUser.password = password;
            newUser.firstName = firstName;
            newUser.middleName = middleName;
            newUser.lastName = lastName;
            newUser.phone = phone
            newUser.hashPassword();
            newUser.taxCode = taxCode;
            newUser.setCreated();
            newUser.setUpdated();
            await userRepository.save(newUser);

            res.customSuccess(200, 'User successfully created.');
        } catch (err) {
            console.log("🚀 ~ file: auth.controller.ts ~ line 45 ~ register ~ err", err)
            const customError = new CustomError(400, 'Raw', `User '${email}' can't be created`, null, err);
            return next(customError);
        }
    } catch (err) {
        const customError = new CustomError(400, 'Raw', 'Error', null, err);
        return next(customError);
    }
};
// };