import { by, device, element } from 'detox';
import { exec } from 'shelljs';

export const byId = (id: string): Detox.IndexableNativeElement => element(by.id(id));

export const byText = (text: string): Detox.IndexableNativeElement => element(by.text(text));

export const byLabel = (label: string): Detox.IndexableNativeElement => element(by.label(label));

export const byType = (type: string): Detox.IndexableNativeElement => element(by.type(type));

export const byTraits = (traits: string[]): Detox.IndexableNativeElement => element(by.traits(traits));

export const sleep = (tts: number): Promise<unknown> => {
  return new Promise(res => {
    setTimeout(res, tts);
  });
};

export const disableAndroidEmulatorAnimations = (): void => {
  if (device.getPlatform() !== 'android') return;

  const { id } = device;

  exec(`adb -s ${id} shell settings put global window_animation_scale 0.0`, { async: true });
  exec(`adb -s ${id} shell settings put global transition_animation_scale 0.0`, { async: true });
  exec(`adb -s ${id} shell settings put global animator_duration_scale 0.0`, { async: true });
};
