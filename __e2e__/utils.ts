import { by, device, element } from 'detox';
import { exec } from 'shelljs';

export const byId = (id: string) => element(by.id(id));
export const byText = (text: string) => element(by.text(text));
export const byLabel = (label: string) => element(by.label(label));
export const byType = (type: string) => element(by.type(type));
export const byTraits = (traits: string[]) => element(by.traits(traits));

export const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export const disableAndroidEmulatorAnimations = () => {
  if (device.getPlatform() === 'android') {
    const { id } = device;

    exec(`adb -s ${id} shell settings put global window_animation_scale 0.0`, { async: true });
    exec(`adb -s ${id} shell settings put global transition_animation_scale 0.0`, { async: true });
    exec(`adb -s ${id} shell settings put global animator_duration_scale 0.0`, { async: true });
  }
};
