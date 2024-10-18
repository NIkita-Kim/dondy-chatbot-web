import { FC, useEffect, useState } from 'react';
import ChatBot, { ChatBotProvider } from 'react-chatbotify';
import { Flow, Styles, Settings } from 'react-chatbotify';
import { ChatRO } from '../lib/types/chat.type';
import { SurveyQuestionTypeEnum } from '../lib/enums/survey-question-type.enum';

type ChatBotDialogProps = {
  chat: ChatRO;
  id?: string;
}

const ChatBotDialog: FC<ChatBotDialogProps> = ({ chat, id }: ChatBotDialogProps) => {
  const [flow, setFlow] = useState<Flow>({});

  useEffect(() => {
    const steps: Flow = {};
    chat.survey.questions
      .sort((a, b) => a.index - b.index)
      .forEach((question, idx, arr) => {
        let stepName = question.index.toString();

        if (idx === 0) {
          stepName = 'start';
        } else if (idx === arr.length - 1 && question.nextQuestionIdx === null) {
          stepName = 'end';
        }

        steps[stepName] = {
          message: question.text,
          path: () => {
            if (question.nextQuestionIdx !== null && (idx + 1) === arr.length - 1) {
              return 'end';
            } else {
              return question.nextQuestionIdx?.toString();
            }
          },
          chatDisabled: false,
          ...(question.type === SurveyQuestionTypeEnum.SINGLE_CHOICE && {
            options: question.options,
            chatDisabled: true,
          }),
          ...(question.type === SurveyQuestionTypeEnum.MULTIPLE_CHOICE && {
            checkboxes: question.options,
            chatDisabled: true,
          }),
        }
      });

    setFlow(steps);
  }, [chat, id]);

  const styles: Styles = {
    chatWindowStyle: {
      width: '81%',
      height: '89%',
    }
  };

  const settings: Settings = {
    header: {
      closeChatIcon: '',
    },
    tooltip: {
      mode: 'NEVER',
    },
    chatWindow: {
      defaultOpen: true,
    },
    chatButton: {
      icon: '',
    },
    notification: {
      icon: 'NEVER',
    },
  };

  return (
    <ChatBotProvider>
      <ChatBot
        flow={flow}
        styles={styles}
        settings={settings}
        id={id}
      />
    </ChatBotProvider>
  );
}

export default ChatBotDialog;
