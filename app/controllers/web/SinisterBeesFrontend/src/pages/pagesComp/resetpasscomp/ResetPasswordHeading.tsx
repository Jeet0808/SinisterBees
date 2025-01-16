import React from 'react';
import user from "../../assets/user.png";
const ResetPasswordHeading: React.FC = () => {
    return (
        <>

            <div
                className="flex items-center text-center w-full"
                style={{
                    width: '40rem', // Explicit width in rem
                    maxWidth: '100%', // Ensures responsiveness
                }}

            >
                <div>
                    <img src={user} alt="user" />
                </div>

                {/* Main Heading */}
                <div className="text-2xl font-bold mt-5 mb-8 leading-tight">
                    Reset Password
                    <div className="text-lg text-gray-400 leading-1">
                        Please enter your email and new password to reset your password.
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPasswordHeading;

