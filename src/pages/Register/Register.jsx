import React, { useState } from 'react';
import styles from './Register.module.css';
import Card from '../../components/shared/Card/Card';
import StepUsername from '../Steps/StepUsername/StepUsername';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1 : StepPhoneEmail,
    2 : StepOtp,
    3 : StepName,
    4 : StepAvatar,
    5 : StepUsername
}

const Register = () => {
    const [step,setStep] = useState(1);
    const Step = steps[step];

    function onNext(params) {
        setStep(step + 1);
    }
  return (
    <div>
        <Step onClick={onNext}/>
    </div>
  )
}

export default Register