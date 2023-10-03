import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { Notification, Widget, NotificationItemProps, IconTrophyRegular, Text, IconBellRegular } from '@rdpgrupo/ui'

export default {
  title: 'Widget/Notification Widget',
  component: Notification.Item,
  args: {},
  tags: ['autodocs'],
} as Meta<NotificationItemProps>

export const Default: StoryObj<NotificationItemProps> = {
  render: (args) => {
    return (
      <Notification.Container totalNotifications={10}>
        <Notification.Item>
          <Notification.Icon Icon={IconTrophyRegular} />
          <Notification.TextContainer>
            <Text size='p4' weight='medium' color='gray-2' >Atualização | Extensivo DPE 2023.1</Text>

            <Text as='p' size='p5' weight='medium' color='gray-3' >Novas aulas adicionadas aos módulos Meta 01, Meta 02 e Meta 04</Text>

            <Text size='p5' weight='regular' color='gray-4' >há 1 hora</Text>

          </Notification.TextContainer>
        </Notification.Item>
      </Notification.Container>
    )
  }


}


export const WithButton: StoryObj<NotificationItemProps> = {
  render: (args) => {
    return (
      <Notification.Container totalNotifications={10}>
        <Notification.Item>
          <Notification.Icon Icon={IconTrophyRegular} />
          <Notification.TextContainer>
            <Text size='p4' weight='medium' color='gray-2' >Atualização | Extensivo DPE 2023.1</Text>

            <Text as='p' size='p5' weight='medium' color='gray-3' >Novas aulas adicionadas aos módulos Meta 01, Meta 02 e Meta 04</Text>

            <Notification.Link linkCover='http://github.com/yale1995.png' linkTitle='Atualizações UI RDP' hasDownload={true} />

            <Text size='p5' weight='regular' color='gray-4' >há 1 hora</Text>

          </Notification.TextContainer>
        </Notification.Item>
      </Notification.Container>
    )
  }
}

export const WithLink: StoryObj<NotificationItemProps> = {
  render: (args) => {
    return (
      <Notification.Container totalNotifications={10}>
        <Notification.Item>
          <Notification.Icon Icon={IconTrophyRegular} />
          <Notification.TextContainer>
            <Text size='p4' weight='medium' color='gray-2' >Atualização | Extensivo DPE 2023.1</Text>

            <Text as='p' size='p5' weight='medium' color='gray-3' >Novas aulas adicionadas aos módulos Meta 01, Meta 02 e Meta 04</Text>

            <Notification.Link linkCover='http://github.com/yale1995.png' linkTitle='Atualizações UI RDP - WidgetNotifications is exported' />

            <Text size='p5' weight='regular' color='gray-4' >há 1 hora</Text>

          </Notification.TextContainer>
        </Notification.Item>
      </Notification.Container>
    )
  }
}

export const Trigger: StoryObj<NotificationItemProps> = {
  render: (args) => {
    return (
      <Widget.Root>
        <Widget.Trigger asChild>
        <button className='bg-gray-8 p-3 rounded-md'>
          <IconBellRegular className='w-4 h-4 text-gray-4'/>
        </button>
        </Widget.Trigger>

        <Widget.Content asChild>
          <Notification.Container totalNotifications={10} className='mt-8 mr-48'>
            <Notification.Item>
              <Notification.Icon Icon={IconTrophyRegular} />
              <Notification.TextContainer>
                <Text size='p4' weight='medium' color='gray-2' >Atualização | Extensivo DPE 2023.1</Text>

                <Text as='p' size='p5' weight='medium' color='gray-3' >Novas aulas adicionadas aos módulos Meta 01, Meta 02 e Meta 04</Text>

                <Notification.Link linkCover='http://github.com/yale1995.png' linkTitle='Atualizações UI RDP - WidgetNotifications is exported' />

                <Text size='p5' weight='regular' color='gray-4' >há 1 hora</Text>

              </Notification.TextContainer>
            </Notification.Item>
          </Notification.Container>
        </Widget.Content>
      </Widget.Root>


    )
  }
}