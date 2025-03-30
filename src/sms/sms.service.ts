import { Injectable } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';

@Injectable()
export class SmsService {

    public constructor(private readonly twilioService: TwilioService) {}


    async sendSMS(phone: string) {

        const from = process.env.TWILIO_PHONE_NUMBER;
        const to = phone;

        if (!from || !to) {
            throw new Error('TWILIO_PHONE_NUMBER o TARGET_PHONE_NUMBER no están definidos');
        }
        return this.twilioService.client.messages.create({
            body: 'SMS Body, sent to the phone!',
            from,
            to
        });
    }
}
