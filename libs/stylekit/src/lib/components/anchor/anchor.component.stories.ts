import { CommonModule } from '@angular/common';
import { moduleMetadata, StoryObj } from '@storybook/angular';
import { LibAnchorComponent } from './anchor.component';

export default {
  component: LibAnchorComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ]
};

export const Internal: StoryObj<LibAnchorComponent> = {
  args: {
    link: '/home'
  },
  render: (args: any) => ({    
    template: `<lib-anchor link="${args.link}">hello world ${args.link}</lib-anchor>`
  })
};

export const External: StoryObj<LibAnchorComponent> = {
  args: {
    link: 'https://facebook.com'
  },
  render: (args: any) => ({    
    template: `<lib-anchor link="${args.link}">hello world 2 ${args.link}</lib-anchor>`
  })
};