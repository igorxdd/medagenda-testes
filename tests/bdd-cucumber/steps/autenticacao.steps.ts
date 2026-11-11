import { Given, When, Then } from '@cucumber/cucumber';
import { MedAgendaWorld } from '../support';
import { config } from '../../shared/support/config';

Given('que o paciente está na página de login', async function (this: MedAgendaWorld) {
  await this.login.open();
});

When('informa as credenciais válidas da conta de demonstração', async function (this: MedAgendaWorld) {
  await this.login.signIn(config.patientEmail, config.patientPassword);
});

Then('acessa o painel autenticado', async function (this: MedAgendaWorld) {
  await this.login.expectAuthenticated();
});
